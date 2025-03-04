import { App } from '@/App';
import { ErrorLayout, AuthLayout, MainLayout, EmptyLayout } from '@/layouts';
import SignIn from '@/pages/sign-in/SignIn';
import SignUp from '@/pages/sign-up/SignUp';
import PasswordRecover from '@/pages/password-recovery/PasswordRecover';
import SmsConfirmation from '@/pages/sms-confirmation/SmsConfirmation';
import ConfirmEmail from '@/pages/confirm-email/ConfirmEmail';
import Home from '@/pages/home/Home';
import Profile from '@/pages/profile/Profile';
import Friends from '@/pages/friends/Friends';
import Messages from '@/pages/messages/Messages';
import Music from '@/pages/music/Music';
import News from '@/pages/news/News';
import Posts from '@/pages/posts/Posts';
import Schedule from '@/pages/schedule/Schedule';
import Settings from '@/pages/settings/Settings';
import Shop from '@/pages/shop/Shop';
import Weather from '@/pages/weather/Weather';
import Video from '@/pages/video/Video';
import Map from '@/pages/map/Map';
import StockExchange from '@/pages/stock-exchange/StockExchange';
import Survey from '@/pages/survey/Survey';
import Users from '@/pages/users/Users';
import User from '@/pages/user/User';

export const routes = [
  {
    element: <App />,
    children: [
      {
        path: '*',
        element: <ErrorLayout />,
      },
      {
        path: '*',
        element: <ErrorLayout />,
      },
      {
        path: 'login',
        element: <AuthLayout />,
        children: [
          {
            index: true,
            element: <SignIn />,
          },
          {
            path: 'sign-up',
            element: <SignUp />,
          },
          {
            path: 'password-recovery',
            element: <PasswordRecover />,
          },
          {
            path: 'sms-confirmation',
            element: <SmsConfirmation />,
          },
          {
            path: 'confirm-email',
            element: <ConfirmEmail />,
          },
        ],
      },
      {
        path: '/',
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: 'profile',
            element: <Profile />,
          },
          {
            path: 'friends',
            element: <Friends />,
          },
          {
            path: 'messages',
            element: <Messages />,
          },
          {
            path: 'music',
            element: <Music />,
          },
          {
            path: 'video',
            element: <Video />,
          },
          {
            path: 'posts',
            element: <Posts />,
          },
          {
            path: 'schedule',
            element: <Schedule />,
          },
          {
            path: 'settings',
            element: <Settings />,
          },
          {
            path: 'news',
            element: <News />,
          },
          {
            path: 'shop',
            element: <Shop />,
          },
          {
            path: 'weather',
            element: <Weather />,
          },
          {
            path: 'map',
            element: <Map />,
          },
          {
            path: 'stock-exchange',
            element: <StockExchange />,
          },
          {
            path: 'users',
            element: <Users />,
          },
          {
            path: 'users/:id',
            element: <User />,
          },
        ],
      },
      {
        path: '/empty',
        element: <EmptyLayout />,
        children: [
          {
            index: true,
            element: <Survey />,
          },
        ],
      },
    ],
  },
];
