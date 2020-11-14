import Axios from 'axios';
import { http, SERVER_URL } from './base'

const suburlSearch = "/search"
const suburlPDF = "/pdf"

class SearchService {
    query(q) {
        return http.get(suburlSearch + "&q=" + q);
    }
    queryAnd(q1, q2) {

    }
    queryOr(q1, q2) {

    }
    getPDFByName(name) {
        return Axios(
            {
                method: 'get',
                url: SERVER_URL + suburlPDF + "&n=" + name,
                responseType: 'blob'
            }
        );
    }
}

export default new SearchService();

