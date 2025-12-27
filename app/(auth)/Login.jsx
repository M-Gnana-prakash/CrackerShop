import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import { FireworkDecoration } from '../../Components/LoginComponents/FireworkDecoration';
import { LoginCard } from '../../Components/LoginComponents/LoginCard';
import { THEME } from '../../Components/ui/theme';

export default function Login() {
  const handleLogin = (email, password) => {
    console.log('Login clicked', { email, password });
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
  };

  const handleSignUp = () => {
    console.log('Sign up clicked');
  };

  const handleForgetPassword = () => {
    console.log('Forget password clicked');
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.scrollView}
    >
      {/* Firework Decorations */}
      <FireworkDecoration
        top={40}
        left={20}
        width={100}
        height={100}
      />
      
      <FireworkDecoration
        top={60}
        right={30}
        width={120}
        height={120}
        opacity={0.8}
      />

      <FireworkDecoration
        top={200}
        right={60}
        width={80}
        height={80}
        opacity={0.5}
      />

      {/* Header Title */}
      <Text style={styles.headerTitle}>Name</Text>

      {/* Login Card */}
      <LoginCard
        onLogin={handleLogin}
        onGoogleLogin={handleGoogleLogin}
        onSignUp={handleSignUp}
        onForgetPassword={handleForgetPassword}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: THEME.colors.primary,
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingVertical: 40,
    backgroundColor: '#FF4444',
    minHeight: Dimensions.get('window').height,
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    letterSpacing: 2,
  },
});