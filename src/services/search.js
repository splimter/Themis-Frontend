import Axios from 'axios';
import { http } from './base'

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
                url: 'http://localhost:4000' + suburlPDF + "&n=" + name,
                responseType: 'blob'
            }
        );
    }
}

export default new SearchService();
