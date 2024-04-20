import { Box, Text } from "@/atoms";
import { Note } from "@/models";
import React from "react";

export interface ListItemProps extends Note { }

const NoteListItem: React.FC<ListItemProps> = props => {
    return (
        <Box bg={"$background"}>
            <Box bg={"$background"} px={"lg"} py={"sm"}>
                <Text fontWeight={"bold"} mb={"xs"} numberOfLines={1} ellipsizeMode="tail">
                    {props.title}
                </Text>
                <Text
                    ellipsizeMode="tail"
                    numberOfLines={2}
                    fontSize={14}
                    opacity={0.7}
                >
                    {props.body}
                </Text>
            </Box>
        </Box>
    )
}

export default NoteListItem

////////////////////////////////////////////////////////////////////////////
// import { View, Text } from 'react-native'
// import React from 'react'
// import { Note } from '@/models'

// export interface ListItemProps extends Note { }

// const NoteListItem: React.FC<ListItemProps> = (props) => {
//     return (
//         <View style={{ backgroundColor: '#f5f5f4' }}>
//             <View style={{ backgroundColor: '#f5f5f4', paddingHorizontal: 20, marginVertical: 10 }} px={"lg"} py={"sm"}>
//                 <Text style={{fontWeight: 'bold', color: 'black', marginBottom: 5}} numberOfLines={1} 
//                 ellipsizeMode="tail"
//                 // fontWeight={"bold"}
//                 // mb={"xs"}  
//                 >
//                     {props.title}
//                 </Text>
//                 <Text
//                     style={{
//                         fontSize: 14,
//                         opacity: 0.7
//                     }}
//                     ellipsizeMode="tail"
//                     numberOfLines={2}
//                     // fontSize={14}
//                     // opacity={0.7}
//                 >
//                     {props.body}
//                 </Text>
//             </View>
//         </View>
//     )
// }

// export default NoteListItem