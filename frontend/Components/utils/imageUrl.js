import { Platform } from 'react-native';

const BASE_URL = 'http://192.168.1.41:5000';

/**
 * Resolves an image URL from the backend.
 * Handles relative paths, absolute file paths, and replaces old/localhost IPs with current server IP.
 */
export const resolveImageUrl = (url) => {
    if (!url) return null;

    // Normalize slashes
    let cleanUrl = url.replace(/\\/g, '/');

    // 1. If it contains '/uploads/', assume it's a local backend image and force the current BASE_URL
    // This handles:
    // - "http://old-ip:5000/uploads/img.jpg" -> "http://new-ip:5000/uploads/img.jpg"
    // - "C:/Users/.../uploads/img.jpg" -> "http://new-ip:5000/uploads/img.jpg"
    // - "/uploads/img.jpg" -> "http://new-ip:5000/uploads/img.jpg"
    if (cleanUrl.includes('/uploads/')) {
        const parts = cleanUrl.split('/uploads/');
        const filename = parts[parts.length - 1];
        return `${BASE_URL}/uploads/${filename}`;
    }

    // 2. If it's a simple filename (e.g. "no-image.jpg"), assume it's in uploads
    if (!cleanUrl.startsWith('http') && !cleanUrl.startsWith('file') && !cleanUrl.includes('/')) {
        return `${BASE_URL}/uploads/${cleanUrl}`;
    }

    // 3. Handle other full URLs (e.g. external images)
    if (cleanUrl.startsWith('http')) {
        // Still fix localhost if present
        if (cleanUrl.includes('localhost') || cleanUrl.includes('127.0.0.1')) {
            return cleanUrl.replace(/localhost|127\.0\.0\.1/, '192.168.1.41');
        }
        return cleanUrl;
    }

    return cleanUrl;
};
