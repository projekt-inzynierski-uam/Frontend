import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Text,Combobox, useCombobox,InputBase,Input,ScrollArea} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState, } from 'react';
import { toast } from 'react-toastify'

const ChangePermission = ({groupId, getData, users}) => {
    const [value, setValue] = useState(null);
    const [value2, setValue2] = useState(null);
    const [opened, { open, close }] = useDisclosure(false);
    const [roles, setRoles] = useState([{id:true, "name":"Administrator"},{id:false, "name":"Użytkownik"}])

    const form = useForm({
        initialValues: {
          targetEmail: '',
          targetRole:''
        }
    });

    const combobox = useCombobox({
      onDropdownClose: () => combobox.resetSelectedOption(),
    });

    const combobox2 = useCombobox({
        onDropdownClose: () => combobox2.resetSelectedOption(),
      });

const changePermission = async (data) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_DBSERVER}/changepermission/${groupId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if(response.status == 400){
        toast.error('Nie można zmienic roli twórcy grupy')
        }
      getData()
    } catch (err) {
      console.error(err)
    }
  }

  const options1 = users.map((user) => (
    <Combobox.Option value={user} key={user.user_email}>
        <Text size='16px'>{user.user_email}</Text>
    </Combobox.Option>
));

const options2 = roles.map((role) => (
    <Combobox.Option value={role} key={role.id}>
        <Text size='16px'>{role.name}</Text>
    </Combobox.Option>
));

    return(
        <>
        <Modal opened={opened} onClose={close} title="Zmień dostępność" centered>
                <form onSubmit={form.onSubmit((values) => changePermission({...values}))}>
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
                                {options1}
                            </ScrollArea.Autosize>
                        </Combobox.Options>
                    </Combobox.Dropdown>
                    </Combobox>
                    <Combobox
                        store={combobox2}
                        onOptionSubmit={(val) => {
                        setValue2(val.name)
                        form.setValues({
                            targetRole: val.id
                        })
                        combobox2.closeDropdown();
                    }}
                    >
                    <Text size="20px">Wybierz role:</Text>
                    <Combobox.Target>
                        <InputBase
                            component="button"
                            type="button"
                            pointer
                            rightSection={<Combobox.Chevron />}
                            rightSectionPointerEvents="none"
                            onClick={() => combobox2.toggleDropdown()}
                            >
                            {value2 || <Input.Placeholder>Wybierz Role</Input.Placeholder>}
                        </InputBase>
                    </Combobox.Target>

                    <Combobox.Dropdown>
                        <Combobox.Options>
                            <ScrollArea.Autosize type="scroll" mah={200}>
                                {options2}
                            </ScrollArea.Autosize>
                        </Combobox.Options>
                    </Combobox.Dropdown>
                    </Combobox>
                    <Button bg="#E98074" size='md' onClick={close} type="submit">Wyślij</Button>
                </form>
                </Modal>

            <Button onClick={() => {
                open(),
                setValue(null),
                setValue2(null),
                form.reset()
            }} bg="#E98074" style={{borderRadius:"10px",fontSize:"20px", fontWeight:"normal"}} h={48} ff={"Oswald"}>Zmień Role</Button>
        </>
    )
}

export default ChangePermission