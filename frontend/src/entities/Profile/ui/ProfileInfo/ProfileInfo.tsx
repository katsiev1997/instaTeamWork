import { getAuthData } from '@/entities/User'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { profileActions } from '../../model/slice/profileSlice'
import { DropDown, HStack, Text, VStack } from '@/shared/ui'
import { getProfileUser } from '../../model/selectors/getProfileUser'
import { Avatar, Button  } from 'antd'
import {EllipsisOutlined} from '@ant-design/icons'
import { useProfile } from '../../model/consts/useProfile'

export const ProfileInfo = () => {

    const authData = useSelector(getAuthData)
    const {id} = useParams<{id: string}>()
    const dispatch = useAppDispatch()
    const dropDownDotsItems = useProfile(authData?._id === id)
    const user = useSelector(getProfileUser)
    useEffect(() => {
        if(authData._id === id ) {
            dispatch(profileActions.setProfileUser(authData))

        }
    } , [id , authData])

  return (
    <HStack max>
        {user && 
        <HStack justify='between'  gap={40}>
            <Avatar size={150} src={user?.avatar} alt='Avatar'></Avatar>

            <VStack gap={32}>
                <HStack align='center' gap={28}>
                    <Text>@{user.username}</Text>

                    
                    {
                        user._id === id ? <Button type='default'>Изменить</Button> : <Button type='primary'>Подписаться</Button>
                    }
                       
                    <DropDown items={dropDownDotsItems} placement='bottomRight'>
                        <EllipsisOutlined  style={{fontSize: 25}}/> 
                    </DropDown>
                </HStack>

                <HStack gap={16}>
                    <HStack gap={8} >
                        <Text size={18} weight={700}>1.258</Text>
                        <Text size={18}>posts</Text>
                    </HStack>
                    <HStack gap={8}>
                        <Text size={18} weight={700}>{user.followers.length}</Text>
                        <Text size={18}>подписчики</Text>
                    </HStack>
                    <HStack >
                        <Text size={18} weight={700}>{user.following.length}</Text>
                        <Text size={18}>подписки</Text>
                    </HStack>
                </HStack>

                <VStack>
                    <Text size={18} weight={700}>
                        {user.fullname}
                    </Text>
                    <Text size={18} weight={700}>
                        {user.mobile}
                    </Text>
                    <Text size={18} weight={700}>
                        {user.address}
                    </Text>
                    <Text size={18} weight={700}>
                        <a href={user.website} target='_blank'>
                            {user.website}
                        </a>
                    </Text>
                    <Text size={18} weight={700}>
                        {user.story}
                    </Text>                   
                </VStack>
            </VStack>
        </HStack>}
    </HStack>
  )
}
