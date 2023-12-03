import {Flex, ScrollArea, Center, Title} from '@mantine/core'
import '../styles/index.css'

const FinishedObjectives = () => {
    return (
        <>
            <Center>
                <Title order={2} ff={"Oswald"} c='#8E8D8A'>Skończone cele</Title>
            </Center>
            <Flex
                mih="600"
                gap="md"
                justify="flex-start"
                align="flex-start"
                direction="column"
                style={{border:"7px solid #E98074", borderRadius:"50px"}}
            >
                <ScrollArea.Autosize>

                </ScrollArea.Autosize>
            </Flex>
        </>
    )
}

export default FinishedObjectives