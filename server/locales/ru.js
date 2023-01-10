// @ts-check

export default {
  translation: {
    appName: 'Менеджер Задач',
    flash: {
      session: {
        create: {
          success: 'Вы залогинены',
          error: 'Неправильный емейл или пароль',
        },
        delete: {
          success: 'Вы разлогинены',
        },
      },
      users: {
        create: {
          error: 'Не удалось зарегистрировать',
          success: 'Пользователь успешно зарегистрирован',
        },
        edit: {
          error: 'Не удалось обновить данные пользователя',
          success: 'Данные пользователя успешно обновлены',
        },
        delete: {
          error: 'Не удалось удалить пользователя',
          success: 'Пользователь успешно удален',
        },
      },
      statuses: {
        create: {
          error: 'Не удалось создать статус',
          success: 'Статус успешно создан',
        },
        edit: {
          notFound: 'Статус не найден',
          error: 'Не удалось обновить данные статуса',
          success: 'Данные статуса успешно обновлены',
        },
        delete: {
          error: 'Не удалось удалить статус',
          success: 'Статус успешно удален',
        },
      },
      authError: 'Доступ запрещён! Пожалуйста, авторизируйтесь',
      accessError: 'У вас нет доступа',
    },
    layouts: {
      application: {
        users: 'Пользователи',
        statuses: 'Статусы',
        signIn: 'Вход',
        signUp: 'Регистрация',
        signOut: 'Выход',
      },
    },
    views: {
      session: {
        new: {
          signIn: 'Вход',
          submit: 'Войти',
        },
      },
      users: {
        id: 'ID',
        firstName: 'Имя',
        lastName: 'Фамилия',
        fullName: 'Полное имя',
        email: 'Email',
        password: 'Пароль',
        createdAt: 'Дата создания',
        new: {
          submit: 'Сохранить',
          signUp: 'Регистрация',
        },
        edit: {
          title: 'Изменить данные пользователя',
          button: 'Изменить',
        },
        delete: 'Удалить',
      },
      statuses: {
        id: 'ID',
        name: 'Наименование',
        new: {
          title: 'Создать статус',
          button: 'Создать',
        },
        edit: {
          title: 'Изменить данные статуса',
          button: 'Изменить',
        },
      },
    },
  },
};
