import { Modal } from '@/shared/ui'
import { Avatar } from '@/shared/ui/Avatar/Avatar'
import React from 'react'
import { useTranslation } from 'react-i18next'

const HomePage = () => {
  const {t} = useTranslation()
  return (
    <div>
      HomePage
      <Modal isOpen={true}>
        <h1>Edit profile</h1>
      </Modal>
    </div>
  )
}

export default HomePage