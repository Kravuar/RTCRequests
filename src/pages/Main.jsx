import Searcher from "../components/Searcher";
import Table from "../components/Table";

export default function Main() {

    return(
        <div className="container shadow my-4 px-2 py-2">
            <Searcher/>
            <Table/>
        </div>
    );
}