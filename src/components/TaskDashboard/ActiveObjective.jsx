import { Flex, Text, Group, Button } from '@mantine/core' 
import { useState, useEffect } from 'react'

const ActiveObjective = ({email}) => {

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
                    <Button>Zmień aktualny cel</Button>
                    <Group c="white" bg="#E98074" miw="20%" maw="50%" style={{borderRadius:"200px"}} ff={"Oswald"} justify="center">
                        <Text>xddd</Text>
                    </Group>
                </Group>
            </Flex>
        </>
    )
}

export default ActiveObjective