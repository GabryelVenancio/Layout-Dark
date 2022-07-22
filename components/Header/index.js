import { Image, Text, View } from "react-native";
import { global } from "../../css/Styles.js";

export default function Header(){
    return(
        <View style={global.header}>
            <Image source={require("../../assets/user.png")} style={global.userimg} />
            <View>
                <Text style={global.nomeheader}> Marcia Claudia </Text>
                <Text style={global.contaheader}> @marciaclaudia </Text>
            </View>
            <Image source={require("../../assets/pesquisar.png")} style={global.pesquisarimg} />
        </View>
    )
}