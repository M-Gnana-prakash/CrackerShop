import { useState } from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { CustomButton } from './CustomButton';
import { Divider } from './Divider';
import { InputField } from './InputField';

const { width } = Dimensions.get('window');

export function LoginCard({
  onLogin,
  onGoogleLogin,
  onSignUp,
  onForgetPassword,
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onLogin(email, password);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.welcomeTitle}>Welcome Back!</Text>
      <Text style={styles.subtitle}>Celebrate Diwali with us</Text>
      <Text style={styles.subtitle}>Login to Continue.</Text>

      {/* Email Input */}
      <InputField
        icon="mail"
        iconColor="#FF6B35"
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Password Input */}
      <InputField
        icon="lock-closed"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        isPassword
      />

      {/* Login Button */}
      <CustomButton
        title="LOGIN"
        onPress={handleLogin}
        customStyle={{ marginTop: 24 }}
      />

      {/* Forget Password */}
      <TouchableOpacity
        style={styles.forgetPasswordContainer}
        onPress={onForgetPassword}
      >
        <Text style={styles.forgetPassword}>Forget Password?</Text>
      </TouchableOpacity>

      {/* Sign Up Link */}
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account? </Text>
        <TouchableOpacity onPress={onSignUp}>
          <Text style={styles.signupLink}>Sign up</Text>
        </TouchableOpacity>
      </View>

      {/* Divider */}
      <Divider />

      {/* Google Login Button */}
      <CustomButton
        title="Continue with Google"
        icon="logo-google"
        variant="google"
        onPress={onGoogleLogin}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
});