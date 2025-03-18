import { App } from '@/App';
import { ErrorLayout, AuthLayout, MainLayout, EmptyLayout } from '@/layouts';
import SignIn from '@/pages/login/sign-in/SignIn';
import SignUp from '@/pages/login/sign-up/SignUp';
import PasswordRecover from '@/pages/login/password-recovery/PasswordRecover';
import SmsConfirmation from '@/pages/login/sms-confirmation/SmsConfirmation';
import ConfirmEmail from '@/pages/login/confirm-email/ConfirmEmail';
import Home from '@/pages/main/home/Home';
import Friends from '@/pages/authUser/friends/Friends';
import Messages from '@/pages/authUser/messages/Messages';
import Music from '@/pages/main/music/Music';
import News from '@/pages/main/news/News';
import Posts from '@/pages/main/posts/Posts';
import Schedule from '@/pages/authUser/schedule/Schedule';
import Settings from '@/pages/authUser/settings/Settings';
import Shop from '@/pages/main/shop/Shop';
import Weather from '@/pages/main/weather/Weather';
import Video from '@/pages/main/video/Video';
import Map from '@/pages/main/map/Map';
import StockExchange from '@/pages/main/stock-exchange/StockExchange';
import Survey from '@/pages/empty/survey/Survey';
import Users from '@/pages/main/users/Users';
import User from '@/pages/authUser/user/User';
import UserMusic from '@/pages/authUser/userMusic/UserMusic';
import PrivacyPolicy from '@/pages/empty/privacy-policy/PrivacyPolicy';
import TermsOfService from '@/pages/empty/terms-of-service/TermsOfService';
import Chat from '@/pages/main/chat/Chat';
import UserVideo from '@/pages/authUser/userVideo/UserVideo';
export const routes = [
  {
    element: <App />,
    children: [
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
            path: 'chat',
            element: <Chat />,
          },
          {
            path: 'user/:id',
            children: [
              {
                index: true,
                element: <User />,
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
                element: <UserMusic />,
              },
              {
                path: 'video',
                element: <UserVideo />,
              },
              {
                path: 'schedule',
                element: <Schedule />,
              },
              {
                path: 'settings',
                element: <Settings />,
              },
            ],
          },
        ],
      },
      {
        path: 'empty',
        element: <EmptyLayout />,
        children: [
          {
            index: true,
            element: <Survey />,
          },
          {
            path: 'pp',
            element: <PrivacyPolicy />,
          },
          {
            path: 'tos',
            element: <TermsOfService />,
          },
        ],
      },
    ],
  },
];
