import { Image, Text, View } from "react-native";

export default function Trending(){
    return (
        <View>
            <View style={global.trendingarea}>

                <Text style={global.titulotrending}> Trending </Text>
                <Text style={global.txtmore}> More -&gt; </Text>

            </View>
            <View style={global.imgesporte}>
                <Image source={require("../../assets/esporte.png")} styles={global.imgtrending} />
                <View style={global.caixalike}>

                    <Image source={require("../../assets/like.png")} styles={global.imglike} />
                    <Text style={global.txtlike}> Like </Text>

                </View>
            <View style={global.caixauser}>
                <Image source={require("../../assets/user1.png")} style={global.imguser1} />  
                <View style={global.caixanome}>

                    <Text style={{color: "white", fontSize: 20}}> Neymar </Text>
                    <Text style={{color: "white", fontSize: 14}}> 30 min ago </Text>

                </View>    
            </View> 

            <Text>
                Um Salve do Ney
            </Text>

          </View>
        </View>
    );
}