import { useHistory } from 'react-router-dom';

function PizzaDisplay() {
    const history = useHistory();

    return (<>
        <button onClick={()=>history.push('/customerinfo')}>Next</button>
    </>);
}

export default PizzaDisplay;