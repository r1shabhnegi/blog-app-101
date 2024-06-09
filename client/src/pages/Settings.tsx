const Settings = () => {
  return (
    <div>
      <div className='flex flex-col justify-between my-16'>
        <h1 className='text-5xl font-semibold tracking-tight text-gray-800 '>
          Settings
        </h1>
      </div>
      <div className='flex flex-col gap-10'>
        <span className='text-[13.5px] flex flex-col gap-2 font-medium cursor-pointer'>
          <p className='text-gray-800 '>Change user information</p>
          <p className='text-gray-400'>Edit your photo, name, bio, etc.</p>
        </span>
        <span className='text-[13.5px] flex flex-col gap-2  text-sm font-medium text-gray-800 cursor-pointer '>
          <p className='text-gray-800 '>Change password</p>
          <p className='text-gray-400'>Create new password with old password</p>
        </span>
        <span className='text-[13.5px] flex flex-col gap-2  text-sm font-medium  cursor-pointer '>
          <p className='text-gray-800'>Reading history</p>
          <p className='text-gray-400'>Look and delete reading history</p>
        </span>
        <span className='text-[13.5px] flex flex-col gap-2  text-sm font-medium text-gray-800 cursor-pointer '>
          <p className='text-gray-800'>Add cover</p>
          <p className='text-gray-400'>Add cover photo to your profile page</p>
        </span>
        <span className='text-sm text-[13.5px] flex flex-col gap-2 font-medium cursor-pointer  '>
          <p className='text-red-600'>Delete account</p>
          <p className='text-gray-400'>
            Permanently delete your account and all of your content.
          </p>
        </span>
      </div>
    </div>
  );
};
export default Settings;
