import Logo from '@/shared/assets/Logo.png'
import { Card, Button, Form, HStack, Input, Text, VStack } from '@/shared/ui'
import cls from './RegisterForm.module.scss'
import { Hr } from '@/shared/ui/Hr/Hr'
import {
  RegisterFormValues,
  useRegisterForm,
} from '../../model/schema/useRegisterForm'
import { useContext } from 'react'
import { ThemeContext } from '@/app/providers'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { registerByEmail } from '../../model/service/registerByEmail'
import { useSelector } from 'react-redux'
import { getAuthError } from '../../model/selectors/getAuthError'
import { useNavigate } from 'react-router-dom'
import { getAuthLoading } from '../../model/selectors/getAuthLoading'

export const RegisterForm = () => {
  const { theme } = useContext(ThemeContext)
  const { register, watch, handleSubmit, errors, isValid, RegisterFormNames } =
    useRegisterForm()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const authLoading = useSelector(getAuthLoading)
  const authError = useSelector(getAuthError)

  const onSubmit = async (data: RegisterFormValues) => {
    const res = await dispatch(registerByEmail(data))
    if (res.meta.requestStatus === 'fulfilled') {
      navigate('/login')
    }
  }

  return (
    <HStack justify="center">
      <VStack gap={12}>
        <Card marginTop={50}>
          <VStack gap={12}>
            <VStack max gap={16} align="center">
              <img src={Logo} />
              <div className={cls.text}>
                <Text size={10} color="gray" align="center">
                  Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.
                </Text>
              </div>

              <Button
                addOnLeft={
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_3_3014)">
                      <path
                        d="M18.2265 0.7547H1.77495C1.21145 0.7547 0.754639 1.21151 0.754639 1.77501V18.2266C0.754639 18.7901 1.21145 19.2469 1.77495 19.2469H18.2265C18.79 19.2469 19.2468 18.7901 19.2468 18.2266V1.77501C19.2468 1.21151 18.79 0.7547 18.2265 0.7547Z"
                        fill="#3D5A98"
                      />
                      <path
                        d="M13.5125 19.2453V12.0843H15.9157L16.275 9.29372H13.5125V7.51247C13.5125 6.70466 13.7375 6.1531 14.8954 6.1531H16.3735V3.6531C15.6577 3.5785 14.9384 3.54303 14.2188 3.54685C12.0907 3.54685 10.625 4.84372 10.625 7.23591V9.29372H8.22192V12.0843H10.625V19.2453H13.5125Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3_3014">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                }
                variant="transparent"
                max
              >
                Войти через facebook
              </Button>

              <HStack gap={8}>
                <Hr></Hr>
                <Text color="gray">Или</Text>
                <Hr></Hr>
              </HStack>

              <Form onSubmit={handleSubmit(onSubmit)} className={cls.form}>
                <VStack gap={16} max>
                  <Input
                    {...register(RegisterFormNames.EMAIL)}
                    value={watch(RegisterFormNames.EMAIL)}
                    error={errors?.email?.message}
                    placeholder="Телефон или эл.адрес  "
                  />
                  <Input
                    {...register(RegisterFormNames.FULLNAME)}
                    value={watch(RegisterFormNames.FULLNAME)}
                    error={errors?.fullname?.message}
                    placeholder="Имя и фамилия"
                  />
                  <Input
                    {...register(RegisterFormNames.USERNAME)}
                    value={watch(RegisterFormNames.USERNAME)}
                    error={errors?.username?.message}
                    placeholder="Имя пользователя"
                  />
                  <Input
                    {...register(RegisterFormNames.PASSWORD)}
                    value={watch(RegisterFormNames.PASSWORD)}
                    error={errors?.password?.message}
                    type="password"
                    placeholder="Пароль"
                  />
                  <Input
                    {...register(RegisterFormNames.CF_PASSWORD)}
                    value={watch(RegisterFormNames.CF_PASSWORD)}
                    error={errors?.cf_password?.message}
                    type="password"
                    placeholder="Повторите пароль"
                  />
                </VStack>
                {authError && <Text color="error">{authError}</Text>}
                <Button
                  max
                  disabled={!isValid && authLoading}
                  type="submit"
                  loading={authLoading}
                >
                  Регистрация
                </Button>
                <Text align="center" color="gray" size={12}>
                  Регистрируясь, вы принимаете Условия. Прочитайте Политику
                  конфидициальности, чтобы узнать, как мы получаем, используем и
                  передаем ваши данные. Также просмотрите Политику в отношении
                  файлов cookie, чтобы узнать, как мы используем файлы cookie и
                  подобные технологии.
                </Text>
              </Form>
            </VStack>
          </VStack>
        </Card>

        <Card>
          <HStack className={cls.card} max justify="center" gap={8}>
            <Text size={12} tag="p">
              Есть аккаунт?
            </Text>
            <Text size={12} tag="span" color="blue">
              Войти
            </Text>
          </HStack>
        </Card>
      </VStack>
    </HStack>
  )
}

export default RegisterForm
