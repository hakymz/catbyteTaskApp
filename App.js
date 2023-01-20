import 'react-native-gesture-handler';
import 'react-native-reanimated';
import React from 'react';
import RootNavigator from './app/src/view/navigators/RootNavigator';
import {Provider} from 'react-redux';
import store from './app/src/redux/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {pushNotificationHelper} from './app/src/helper';
import {ignoreWarnings} from './app/src/helper';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import {QueryClient, QueryClientProvider} from 'react-query';
// import SplashScreen from 'react-native-splash-screen';

// Create a client
const queryClient = new QueryClient();

const persistor = persistStore(store);

const App = () => {
  React.useEffect(() => {
    // SplashScreen.hide();
    ignoreWarnings();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <RootNavigator />
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

export default App;
