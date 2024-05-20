import { SignIn, SignUp, UserButton } from '@clerk/clerk-react';

function AuthPage() {
  return (
    <div>
      <SignIn />
      <SignUp />
    </div>
  );
}

export default AuthPage;