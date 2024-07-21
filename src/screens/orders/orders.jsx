import { FlatList, Image, Text, View } from "react-native";
import { styles } from "./orders.style.js";
import { pedidos } from "../../constants/data.js";
import icons from "../../constants/icons.js";
import Order from "../../components/order/order.jsx";

function Orders() {
  return (
    <View style={styles.container}>
      <FlatList
        data={pedidos}
        keyExtractor={(pedido) => pedido.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Order
              logotipo={item.logotipo}
              nome={item.nome}
              valor={item.vl_total}
              data={item.dt_pedido}
              status={item.status}
            />
          );
        }}
        contentContainerStyle={styles.containerList}
        ListEmptyComponent={() => {
          return (
            <View style={styles.empty}>
              <Image source={icons.empty} />
              <Text style={styles.emptyText}>Nenhum pedido encontrado</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

export default Orders;
