import { StyleSheet } from "react-native";

/**
 * Estilos do componente Navigation
 * Separados da lógica para facilitar manutenção e reuso
 */
export const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  headerRight: {
    marginRight: 10,
  },
  userBadge: {
    flexDirection: "row",
    alignItems: "center",
  },
  userInfo: {
    alignItems: "flex-end",
  },
  userName: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});
