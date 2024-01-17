import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Text,Combobox, useCombobox,InputBase,Input,ScrollArea} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState, useEffect } from 'react';

const ChangeObjectiveConnectionModal = ({groupId, getData, users, objectives}) => {
    const [value, setValue] = useState(null);
    const [value2, setValue2] = useState(null);
    const [opened, { open, close }] = useDisclosure(false);

    const form = useForm({
        initialValues: {
          targetEmail: '',
          targetObjective:''
        }
    });

    const combobox = useCombobox({
      onDropdownClose: () => combobox.resetSelectedOption(),
    });

    const combobox2 = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
      });

const changeConnection = async (data) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_DBSERVER}/changeconnection`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
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

const options2 = objectives.map((objective) => (
    <Combobox.Option value={objective} key={objective.id}>
        <Text size='16px'>{objective.title}</Text>
    </Combobox.Option>
));
    return(
        <>
        <Modal opened={opened} onClose={close} title="Przypisz cel" centered>
                <form onSubmit={form.onSubmit((values) => changeConnection({...values}))}>
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
                        setValue2(val.title)
                        form.setValues({
                            targetObjective: val.id
                        })
                        combobox2.closeDropdown();
                    }}
                    >
                    <Text size="20px">Wybierz Cel:</Text>
                    <Combobox.Target>
                        <InputBase
                            component="button"
                            type="button"
                            pointer
                            rightSection={<Combobox.Chevron />}
                            rightSectionPointerEvents="none"
                            onClick={() => combobox2.toggleDropdown()}
                            >
                            {value2 || <Input.Placeholder>Wybierz Cel</Input.Placeholder>}
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
            }} bg="#E98074" style={{borderRadius:"50px", fontSize:"20px", fontWeight:"normal"}} ff={"Oswald"}>Zmień przypisanie celów</Button>
        </>
    )
}

export default ChangeObjectiveConnectionModal