import { Box, Text } from "@/atoms";
import { Note } from "@/models";
import React, { useCallback } from "react";
import NoteListItemActionView from "./note-list-item-action-view";
import SwipeableView from "./swipeable-view";
import { TouchableOpacity } from "@/atoms/touchable";

export interface ListItemProps extends Note {
    onPress: (noteId: string) => void
    onSwipeLeft: (noteId: string, done: () => void) => void
}

const NoteListItem: React.FC<ListItemProps> = props => {
    const { onPress, onSwipeLeft, id } = props
    const handlePress = useCallback(() => {
        onPress(id)
    }, [onPress, id])
    const handleSwipeLeft = useCallback((done) => {
        onSwipeLeft && onSwipeLeft(id, done)
    }, [id, onSwipeLeft])

    const renderBackView = useCallback(
        ({ progress }) => (
            <NoteListItemActionView progress={progress} />
        ),
        []
    )

    return (
        <SwipeableView bg={"yellow"} onSwipeLeft={handleSwipeLeft} backView={renderBackView}>
            <Box bg={"$background"}>
                <TouchableOpacity
                    bg={"$background"}
                    px={"lg"}
                    py={"sm"}
                    onPress={handlePress}
                >
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
                </TouchableOpacity>
            </Box>
        </SwipeableView>
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