// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Dimensions,
//   FlatList,
//   Image,
//   SafeAreaView,
//   TouchableOpacity,
// } from 'react-native';
// import RegisterComponent from '.';
// import LoginComponent from '../login';

// const listTab = [
//   {
//     status: 'Household',
//   },
//   {
//     status: 'Agent',
//   },
// ];

// const data = [
//   {
//     name: 'Ronaldo',
//     status: 'Green',
//   },
//   {
//     name: 'Messi',
//     status: 'Green',
//   },
//   {
//     name: 'Kaka',
//     status: 'Purple',
//   },
//   {
//     name: 'Mbappe',
//     status: 'Green',
//   },
//   {
//     name: 'Kante',
//     status: 'Green',
//   },
//   {
//     name: 'Mikel',
//     status: 'Purple',
//   },
//   {
//     name: 'Haaland',
//     status: 'Green',
//   },
//   {
//     name: 'Tevez',
//     status: 'Purple',
//   },
// ];

// const SwitchS = () => {
//   const [status, setStatus] = React.useState('All');
//   const setStatusFilter = status => {
//     setStatus(status);
//   };

//   const renderItem = ({item, index}) => {
//     return (
//       <View key={index} style={styles.itemContainer}>
//         <View style={styles.itemLogo}>
//           <Image
//             style={styles.itemImage}
//             source={{
//               uri: 'https://www.spized.com/thumbnail/4e/0a/6a/1639758806/volleyballtrikot-herren-fc-junkersdorf-gaffel-koelsch-rot-schwarz_(2)_1920x1920.jpg',
//             }}
//           />
//         </View>
//         <View style={styles.itemBody}>
//           <Text style={styles.itemName}>{item.name}</Text>
//         </View>
//         <View
//           style={[
//             styles.itemStatus,
//             {backgroundColor: item.status === 'Purple' ? '#e5848e' : '#69c080'},
//           ]}>
//           <Text>{item.status}</Text>
//         </View>
//       </View>
//     );
//   };
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.listTab}>
//         {listTab.map((e, id = {e}) => (
//           <TouchableOpacity
//             style={[styles.btnTab, status === e.status && styles.btnTabActive]}
//             onPress={() => setStatusFilter(e.status)}
//             key={id}>
//             <Text
//               style={[
//                 styles.textTab,
//                 status === e.status && styles.textTabActive,
//               ]}>
//               {e.status}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       <View>
//         {status === 'All' && <LoginComponent />}
//         {status !== 'All' && <RegisterComponent />}
//       </View>
//       {/* <FlatList
//         data={data}
//         keyExtractor={(e, i) => i.toString()}
//         renderItem={renderItem}
//       /> */}
//     </SafeAreaView>
//   );
// };

// export default SwitchS;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 10,
//     justifyContent: 'center',
//   },
//   listTab: {
//     flexDirection: 'row',
//     alignSelf: 'center',
//     marginBottom: 20,
//   },
//   btnTab: {
//     width: Dimensions.get('window').width / 3.5,
//     flexDirection: 'row',
//     borderWidth: 0.5,
//     borderColor: '#EBEBEB',
//     padding: 10,
//     justifyContent: 'center',
//   },
//   textTab: {
//     fontSize: 16,
//   },
//   btnTabActive: {
//     backgroundColor: '#E6838D',
//   },
//   textTabActive: {
//     color: '#fff',
//   },
//   itemContainer: {
//     flexDirection: 'row',
//     paddingVertical: 15,
//   },
//   itemLogo: {
//     padding: 10,
//   },
//   itemImage: {
//     width: 50,
//     height: 50,
//   },
//   itemBody: {
//     flex: 1,
//     paddingHorizontal: 10,
//     justifyContent: 'center',
//   },
//   itemName: {
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   itemStatus: {
//     backgroundColor: 'green',
//     paddingHorizontal: 6,
//     justifyContent: 'center',
//     right: 12,
//   },
// });
