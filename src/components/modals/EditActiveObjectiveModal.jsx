import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Combobox, useCombobox, InputBase, Input, ScrollArea } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState, useEffect } from 'react';

const EditActiveObjectiveModal = ({userEmail}) => {

    const [unfinishedObjectives, setUnfinishedObjectives] = useState([])
    const [opened, { open, close }] = useDisclosure(false);
    const [value, setValue] = useState(null);

    const form = useForm({
        initialValues: {
          id: null
        }
    })

    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
    });


    const getData = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_DBSERVER}/unfinishedobjectives/${userEmail}`)
          const json = await response.json()
          setUnfinishedObjectives(json)
        } catch (err) {
          console.error(err)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    const editActiveObjective = async (data) => {
        try {
          const response = await fetch(`${import.meta.env.VITE_DBSERVER}/editactiveobjective/${userEmail}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          })
        } catch (err) {
          console.error(err)
        }
    }

    const options = unfinishedObjectives.map((objective) => (
        <Combobox.Option value={objective} key={objective.id}>
            {objective.title}
        </Combobox.Option>
    ));

    return(
        <>
            <Modal opened={opened} onClose={close} title="Zmień aktualny cel">
                <form onSubmit={form.onSubmit((values) => editActiveObjective(values))}>
                    <Combobox
                        store={combobox}
                        onOptionSubmit={(val) => {
                        setValue(val.title)
                        form.setValues({
                            id: val.id
                        })
                        combobox.closeDropdown();
                    }}
                    >
                    <Combobox.Target>
                        <InputBase
                            component="button"
                            type="button"
                            pointer
                            rightSection={<Combobox.Chevron />}
                            rightSectionPointerEvents="none"
                            onClick={() => combobox.toggleDropdown()}
                            >
                            {value || <Input.Placeholder>Wybierz cel</Input.Placeholder>}
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
                    <Button onClick={close} type="submit">Wyślij</Button>
                </form>
            </Modal>

            <Button onClick={() => {
                open(),
                form.reset()
            }} bg="#E98074" style={{borderRadius:"50px", fontSize:"15px", fontWeight:"normal"}} ff={"Oswald"}>Zmień cel</Button>
        </>
    )
}

export default EditActiveObjectiveModal