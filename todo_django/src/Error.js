import { useRouteError } from "react-router-dom";

export default function Error() {
    const error = useRouteError();

    return <div>
        <div>
            잘못된 요청사항입니다
        </div>
        <p>
            <i>{error.statusTet || error.message}</i>
        </p>
    </div>
}
