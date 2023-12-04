import { Flex, Text, Group } from '@mantine/core' 
import { useState, useEffect } from 'react'

const ActiveObjective = ({email}) => {
    const [activeobjective, setActiveObjectives] = useState(null)

    const getData = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_DBSERVER}/activeobjective/${email}`)
          const json = await response.json()
          setActiveObjectives(json)
        } catch (err) {
          console.error(err)
        }
    }
    
    useEffect(() => {
        getData()
    }, [])

    return(
        <>
            <Flex
                gap="2px"
                justify="center"
                align="center"
                direction="row"
                p="xs"
                w="100%"
            >
                <Group w="100%" style={{borderRadius:"50px", height:"40px"}} ff={"Oswald"}>
                    <Text ta="center" c="#8E8D8A" pl="10px" size="lg" w="60%">Aktualny Cel</Text>
                    <Group bg="#E98074" miw="20%" maw="50%" style={{borderRadius:"200px"}} ff={"Oswald"} justify="center">
                        <Text>{activeobjective.current_points}/{activeobjective.max_points}</Text>
                    </Group>
                </Group>
            </Flex>
        </>
    )
}

export default ActiveObjective