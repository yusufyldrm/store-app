import { Button } from 'components';
import { Link } from 'react-router-dom';
import { Wrapper } from './style';

const NotFound = () => {
  return (
    <Wrapper>
      <h1>404 | Not Found</h1>
      <Link to={'/'}>
        <Button
          title={'Go to Home'}
          style={{ width: 'auto' }}
        />
      </Link>
    </Wrapper>
  )
};

export default NotFound;
