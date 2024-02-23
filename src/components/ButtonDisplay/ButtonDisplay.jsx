import { useHistory } from 'react-router-dom';

function ButtonDisplay() {
    const history = useHistory();

    return (<>
        <button onClick={()=>history.push('/customerinfo')}>Next</button>
    </>);
}

export default ButtonDisplay;