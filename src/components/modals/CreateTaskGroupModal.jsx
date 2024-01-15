import { useDisclosure } from '@mantine/hooks';
import { Modal, TextInput, Button, NumberInput, Text,Combobox, useCombobox,InputBase,Input,ScrollArea} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState, useEffect } from 'react';
import { DateInput } from '@mantine/dates';

const CreateTaskGroupModal = ({groupId, userEmail, getData}) => {
    const [dateend, setDateEnd] = useState(null);
    const [users, setUsers] = useState([])
    const [value, setValue] = useState(null);

    const form = useForm({
        initialValues: {
          title: '',
          points: 0,
          targetEmail: ''
        },
    
        validate: {
          title: (value) => (value.length > 30 || value.length < 1 ? 'Zła długość tutyłu': null),
        },
    });

    const combobox = useCombobox({
      onDropdownClose: () => combobox.resetSelectedOption(),
    });

    const getUsers = async () => {
      try {
          const response = await fetch(`${import.meta.env.VITE_DBSERVER}/groupusers/${groupId}`)
          const json = await response.json()
          setUsers(json)
      } catch (err) {
        console.error(err)
      }
  }

    const [opened, { open, close }] = useDisclosure(false);

    const createTaskGroup = async (data) => {
        try {
          const response = await fetch(`${import.meta.env.VITE_DBSERVER}/createtaskgroup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          })
          getData()
        } catch (err) {
          console.error(err)
        }
      }

    useEffect(() => {
        getUsers()
    }, [])
    
    const options = users.map((user) => (
      <Combobox.Option value={user} key={user.user_email}>
          <Text size='16px'>{user.user_email}</Text>
      </Combobox.Option>
  ));

    return (
        <>
            <Modal opened={opened} onClose={close} title="Dodaj nowe zadanie" centered>
                <form onSubmit={form.onSubmit((values) => createTaskGroup({...values, dateend, userEmail, groupId}))}>
                  <Text size="20px">Tytuł</Text>
                    <TextInput
                        withAsterisk
                        {...form.getInputProps('title')}
                    />
                    <Text size="20px">Ilość punktów za zadanie</Text>
                    <NumberInput
                        withAsterisk
                        min={0}
                        max={99}
                        {...form.getInputProps('points')}
                    />
                    <Text size="20px">Data rozpoczecia</Text>
                    <DateInput
                        withAsterisk
                        value={dateend}
                        onChange={setDateEnd}
                        valueFormat="DD-MM-YYYY"
                    />
                    <Combobox
                        store={combobox}
                        onOptionSubmit={(val) => {
                        setValue(val.user_email)
                        form.setValues({
                            targetEmail: val.user_email
                        })
                        combobox.closeDropdown();
                    }}
                    >
                    <Text size="20px">Wybierz użytkownika:</Text>
                    <Combobox.Target>
                        <InputBase
                            component="button"
                            type="button"
                            pointer
                            rightSection={<Combobox.Chevron />}
                            rightSectionPointerEvents="none"
                            onClick={() => combobox.toggleDropdown()}
                            >
                            {value || <Input.Placeholder>Wybierz użytkownika</Input.Placeholder>}
                        </InputBase>
                    </Combobox.Target>

                    <Combobox.Dropdown>
                        <Combobox.Options>
                            <ScrollArea.Autosize type="scroll" mah={200}>
                                {options}
                            </ScrollArea.Autosize>
                        </Combobox.Options>
                    </Combobox.Dropdown>
                    </Combobox>
                    <Button bg="#E98074" size='md' onClick={close} type="submit">Wyślij</Button>
                </form>
            </Modal>

            <Button onClick={() => {
                open(),
                setDateEnd(null),
                setValue(null),
                form.reset()
            }} bg="#E98074" style={{borderRadius:"50px", fontSize:"20px", fontWeight:"normal"}} ff={"Oswald"}>Dodaj nowe zadanie</Button>
        </>
    )
}

export default CreateTaskGroupModal