function useIsCorrectPath(pathname: string) {
  const srcArr = ['/', 'login', 'register', 'course', 'event'];
  return srcArr.some(item => item !== '/' ? `/${item}` === pathname : item === pathname);
}

export default useIsCorrectPath;