import Button from './components/ui/Button.tsx';
import { useActions } from './hooks/store/useActions.ts';
import { faker } from '@faker-js/faker'

function App() {

  const { addUser } = useActions();

  return (
    <div className="container">
      <Button
        primary
        onClick={() => {
          addUser({ name: faker.person.firstName() });
        }}
      >Add User</Button>
    </div>
  )
}

export default App
