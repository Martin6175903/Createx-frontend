function useCheckSphere(sphere: string) {
  switch (sphere) {
    case 'Marketing':
      return 'bg-success';
    case 'Management':
      return 'bg-info';
    case 'HR & Recruting':
      return 'bg-warning';
    case 'Design':
      return 'bg-[#F52F6E]';
    default:
      return new Error('Для такой сферы цвета нет!');
  }
}

export default useCheckSphere;