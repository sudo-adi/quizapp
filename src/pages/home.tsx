import { SignInButton } from '@clerk/clerk-react'


const Home = () => {

  const REACT_APP_CLERK_SIGN_IN_FORCE_REDIRECT_URL = process.env.REACT_APP_CLERK_SIGN_IN_FORCE_REDIRECT_URL as string;
  const REACT_APP_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL = process.env.REACT_APP_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL as string;

  return (
    <div>
      <a href="localhost:3000" className='block'>
        <div className='h-[50px] rounded-full mt-2 mx-2 bg-gradient-to-r from-indigo-800 via-purple-500 to-pink-500 items-center flex flex-row justify-between'>
          <a href='.'>
            <h1 className="text-white pl-6 text-xl font-bold">Xeon Quiz</h1>
          </a>
          <div className="flex text-white text-xl font-semibold flex-row gap-6 items-center justify-center mr-40">
            <h1 className='hover:text-pink-200'>
              <div>

                <SignInButton mode='modal' fallbackRedirectUrl={"/Dashboard"} signUpFallbackRedirectUrl={"/Dashboard"} />
              </div>

            </h1>
          </div>
        </div>
      </a>
    </div>
  )
}

export default Home