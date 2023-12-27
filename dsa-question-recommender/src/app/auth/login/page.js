import GoogleIcon from '@mui/icons-material/Google'

export default function Page () {
  return (
    <section className='flex flex-col items-center w-full'>
      <h1 className='text-3xl font-bold text-cream mb-4'>Welcome Back!</h1>
      <h3 className='text-cream mb-8'>Please enter your details to Log In</h3>
      <form className='w-full'>
        <div className='mb-5'>
          <input
            type='email'
            id='email-input'
            placeholder='Email'
            className='bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
        </div>
        <div className='mb-5'>
          <input
            type='password'
            id='password-input'
            placeholder='Password'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
        </div>
        <div className='mb-10 float-end'>
          <a href='#forgot-password' className='text-cream underline text-sm'>
            Forgot Password?
          </a>
        </div>
        <div>
          <button
            type='submit'
            className='bg-auth-red w-full text-cream rounded-full py-2 px-6 font-semibold'
          >
            Log In
          </button>
        </div>
      </form>
      <div className='divider my-10 text-cream text-opacity-50'>OR</div>
      <a className=' border-auth-red border w-full py-3 text-auth-red hover:bg-auth-red hover:text-cream transition ease-in-out delay-150 rounded-full px-6 focus:outline-none focus:ring text-center focus:border-blue-300'>
        <GoogleIcon className='text-center' /> <span className='ms-2'>Continue with Google</span>
      </a>
      <div className='mt-10 text-cream'>
        Don&apos;t have an account? <a className='text-auth-red' href='/auth/register'>Sign Up</a>
      </div>
    </section>
  )
}
