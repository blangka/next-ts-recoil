import { Suspense, useState, useEffect } from "react";

const useMounted = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}

const SSRSafeSuspense = (props:any) => {
  const isMounted = useMounted();

  if (isMounted) {
    return <Suspense {...props} />;
  }
  return <>{props.fallback}</>;
}

export default SSRSafeSuspense;
