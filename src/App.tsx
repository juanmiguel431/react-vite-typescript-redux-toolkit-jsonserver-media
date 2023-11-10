import Button from './components/ui/Button.tsx';
import { useActions } from './hooks/store/useActions.ts';
import { faker } from '@faker-js/faker'
import UserList from './components/UserList.tsx';
import useThunk from './hooks/useThunk.ts';

function App() {

  const { addUser } = useActions();

  const [addUserThunk, loading, error] = useThunk(addUser);


  return (
    <div className="container mx-auto">
      <Button
        primary
        loading={loading}
        onClick={async () => {
          const response = await addUserThunk({ name: faker.person.firstName() });
          console.log(response);
        }}
      >Add User</Button>
      {error?.message}
      <UserList/>
    </div>
  )
}

export default App
