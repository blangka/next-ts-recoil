import { RecoilRoot } from "recoil";
import {AppProps} from "next/app";

const app = ({ Component, pageProps }: AppProps) => {
    return (
        <RecoilRoot>
            <Component {...pageProps} />
        </RecoilRoot>
    );
};

export default app;
