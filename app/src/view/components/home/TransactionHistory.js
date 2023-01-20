import React from 'react';
import {FlatList, View} from 'react-native';
import {useWallet} from '../../../hooks';
import {TransactionList} from '../lists';
import LottieView from 'lottie-react-native';
import {s} from 'react-native-size-matters';

const filterTransaction = (walletHistory, setFilteredTransactions, filter) => {
  const transactions = [];
  walletHistory?.forEach((element, index) => {
    if (!filter && transactions?.length < 10) {
      transactions.push(element);
    } else if (filter == element.category && transactions.length < 10) {
      transactions.push(element);
    }
  });

  setFilteredTransactions(transactions);
};

const AllList = React.memo(({filterdTransactions}) => {
  return (
    <FlatList
      data={filterdTransactions}
      renderItem={({item, index}) => (
        <TransactionList
          item={item}
          lastDate={filterdTransactions[index - 1]?.created_at}
        />
      )}
    />
  );
});

export const TransactionHistory = React.memo(({walletHistory}) => {
  const {filter} = useWallet();
  const [filterdTransactions, setFilteredTransactions] =
    React.useState(walletHistory);

  React.useEffect(() => {
    filterTransaction(walletHistory, setFilteredTransactions, filter);
  }, [filter, walletHistory]);

  return (
    <View style={{marginTop: 10}}>
      {(filterdTransactions?.length == 0 || filterdTransactions == null) && (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <LottieView
            resizeMode="cover"
            style={{
              height: s(284),
            }}
            autoPlay
            loop={true}
            source={require('../../../assets/lottieFiles/others/empty.json')}
          />
        </View>
      )}
      <AllList filterdTransactions={filterdTransactions} />
    </View>
  );
});
