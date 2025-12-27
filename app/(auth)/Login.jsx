import { Ionicons } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';
import { useState } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log('Login clicked', { email, password });
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.scrollView}
    >
      {/* Firework Decorations with Lottie */}
      <View style={[styles.firework, { top: 40, left: 20, width: 100, height: 100 }]}>
        <LottieView
          source={require('../../assets/images/Fireworks Teal and Red.json')}
          autoPlay
          loop
          style={styles.lottieAnimation}
        />
      </View>
      
      <View style={[styles.firework, { top: 60, right: 30, width: 120, height: 120 }]}>
        <LottieView
          source={require('../../assets/images/Fireworks Teal and Red.json')}
          autoPlay
          loop
          style={[styles.lottieAnimation, { opacity: 0.7 }]}
        />
      </View>
      
      <View style={[styles.firework, { bottom: 150, left: 30 }]}>
        <Text style={styles.fireworkText}>🪔</Text>
      </View>
      
      <View style={[styles.firework, { bottom: 100, right: 40 }]}>
        <Text style={styles.fireworkText}>🎇</Text>
      </View>

      <View style={[styles.firework, { top: 200, right: 60, width: 80, height: 80 }]}>
        <LottieView
          source={require('../../assets/images/Fireworks Teal and Red.json')}
          autoPlay
          loop
          style={[styles.lottieAnimation, { opacity: 0.5 }]}
        />
      </View>

      {/* Diwali Glow Title */}
      <Text style={styles.headerTitle}>Diwali Glow...</Text>

      {/* Login Card */}
      <View style={styles.card}>
        <Text style={styles.welcomeTitle}>Welcome Back!</Text>
        <Text style={styles.subtitle}>Celebrate Diwali with us</Text>
        <Text style={styles.subtitle}>Login to Continue.</Text>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <Ionicons
            name="mail"
            size={20}
            color="#FF6B35"
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Ionicons
            name="lock-closed"
            size={20}
            color="#666"
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#999"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeIcon}
          >
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={20}
              color="#666"
            />
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>

        {/* Forget Password */}
        <TouchableOpacity style={styles.forgetPasswordContainer}>
          <Text style={styles.forgetPassword}>Forget Password?</Text>
        </TouchableOpacity>

        {/* Sign Up Link */}
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.signupLink}>Sign up</Text>
          </TouchableOpacity>
        </View>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Google Login Button */}
        <TouchableOpacity
          style={styles.googleButton}
          onPress={handleGoogleLogin}
        >
          <Ionicons name="logo-google" size={20} color="#FFF" />
          <Text style={styles.googleButtonText}>Continue with Google</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#FF4444',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingTop: 80,
    paddingBottom: 40,
    backgroundColor: '#FF4444',
  },
  firework: {
    position: 'absolute',
  },
  fireworkText: {
    fontSize: 32,
  },
  lottieAnimation: {
    width: '100%',
    height: '100%',
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFF',
    fontStyle: 'italic',
    marginBottom: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 24,
    padding: 32,
    width: width - 40,
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    borderWidth: 4,
    borderColor: '#4A90E2',
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    marginTop: 16,
    paddingHorizontal: 16,
    height: 50,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#000',
  },
  eyeIcon: {
    padding: 4,
  },
  loginButton: {
    backgroundColor: '#FF4444',
    borderRadius: 10,
    paddingVertical: 14,
    marginTop: 24,
    shadowColor: '#FF4444',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  forgetPasswordContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  forgetPassword: {
    color: '#333',
    fontSize: 13,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  signupText: {
    color: '#333',
    fontSize: 13,
  },
  signupLink: {
    color: '#FF4444',
    fontSize: 13,
    fontWeight: 'bold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#DDD',
  },
  dividerText: {
    color: '#999',
    fontSize: 13,
    paddingHorizontal: 16,
  },
  googleButton: {
    backgroundColor: '#FF4444',
    borderRadius: 10,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#FF4444',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  googleButtonText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '600',
    marginLeft: 8,
  },
});