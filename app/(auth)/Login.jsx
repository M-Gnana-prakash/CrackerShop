import { AntDesign, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import {
    Dimensions,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

const { width } = Dimensions.get('window');

export default function Login() {
  return (
    <LinearGradient
      colors={['#FF8C00', '#D32F2F']} 
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.logoText}>Diwali{"\n"}Glow</Text>
        </View>

        {/* Login Card */}
        <View style={styles.card}>
          <Text style={styles.welcomeTitle}>Welcome Back!</Text>
          <Text style={styles.subTitle}>Celebrate Diwali with Us!{"\n"}Login to continue.</Text>

          {/* Email Input */}
          <View style={styles.inputContainer}>
            <MaterialCommunityIcons name="lamp" size={20} color="#666" style={styles.inputIcon} />
            <TextInput 
              placeholder="Email Address" 
              placeholderTextColor="#999" 
              style={styles.input} 
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Password Input */}
          <View style={styles.inputContainer}>
            <MaterialCommunityIcons name="sparkles" size={20} color="#666" style={styles.inputIcon} />
            <TextInput 
              placeholder="Password" 
              placeholderTextColor="#999" 
              secureTextEntry 
              style={styles.input} 
            />
            <TouchableOpacity>
              <Text style={styles.showText}>Show</Text>
            </TouchableOpacity>
          </View>

          {/* Login Button */}
          <TouchableOpacity activeOpacity={0.8} style={styles.buttonWrapper}>
            <LinearGradient
              colors={['#FF6B00', '#B22222']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.loginButton}
            >
              <Text style={styles.loginButtonText}>LOGIN</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>

          <View style={styles.signUpContainer}>
            <Text style={styles.noAccountText}>Don't have an account? </Text>
            <TouchableOpacity>
              <Text style={styles.signUpText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Social Login Footer */}
        <View style={styles.socialSection}>
          <Text style={styles.socialLabel}>Social Login</Text>
          <View style={styles.socialIconsRow}>
            <View style={styles.socialCircle}>
              <AntDesign name="google" size={24} color="#DB4437" />
            </View>
            <View style={styles.socialCircle}>
              <FontAwesome5 name="facebook" size={24} color="#4267B2" />
            </View>
            <View style={styles.socialCircle}>
              <AntDesign name="apple1" size={24} color="black" />
            </View>
          </View>
        </View>

      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    marginTop: 50,
    marginBottom: 30,
  },
  logoText: {
    fontSize: 48,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle: 'italic', // Temporary fix for the cursive look
  },
  card: {
    backgroundColor: '#FFF',
    width: width * 0.9,
    borderRadius: 35,
    paddingVertical: 40,
    paddingHorizontal: 25,
    alignItems: 'center',
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    // Shadow for Android
    elevation: 10,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  subTitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 22,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    borderRadius: 15,
    paddingHorizontal: 15,
    marginBottom: 15,
    height: 60,
    width: '100%',
    borderWidth: 1,
    borderColor: '#EEE',
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#000',
    fontSize: 16,
  },
  showText: {
    color: '#666',
    fontSize: 14,
    fontWeight: '600',
  },
  buttonWrapper: {
    width: '100%',
    marginTop: 10,
  },
  loginButton: {
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FF6B00',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 5,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1.2,
  },
  forgotPassword: {
    marginTop: 20,
    color: '#333',
    fontWeight: '500',
  },
  signUpContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  noAccountText: {
    color: '#666',
  },
  signUpText: {
    color: '#FF6B00',
    fontWeight: 'bold',
  },
  socialSection: {
    marginTop: 'auto',
    marginBottom: 40,
    alignItems: 'center',
  },
  socialLabel: {
    color: '#FFF',
    fontSize: 14,
    marginBottom: 15,
    opacity: 0.9,
  },
  socialIconsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  socialCircle: {
    backgroundColor: '#FFF',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});