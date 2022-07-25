import Header from 'components/Header';

const Main = ({
  children
}) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  )
}

export default Main;
