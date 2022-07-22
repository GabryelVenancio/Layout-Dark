import { Text, View, Image, ScrollView } from "react-native";
import { global } from "../../css/Styles.js";

export default function Stories() {
    return (
        <View>
            <Text style={global.titulostories}>Stories</Text>

            <ScrollView horizontal={true}>


                <View>
                    <View style={global.atividades}>
                        <Text style={global.tag}>Live</Text>
                        <Text style={global.like}>20.5k</Text>
                    </View>
                    <Image source={require("../../assets/travel1.png")} style={global.imgstories} />
                    <Text style={global.username}> 
                        Veneza
                        <Image source={require("../../assets/check.png")} style={global.imgcheck} />
                    </Text>
                </View>

                <View>
                    <View style={global.atividades}>
                        <Text style={global.tag}>Live</Text>
                        <Text style={global.like}>20.5k</Text>
                    </View>
                    <Image source={require("../../assets/travel2.png")} style={global.imgstories} />
                    <Text style={global.username}> 
                        Monte Everest
                        <Image source={require("../../assets/check.png")} style={global.imgcheck} />
                    </Text> 
                </View>
                <View>
                    <View style={global.atividades}>
                        <Text style={global.tag}>Live</Text>
                        <Text style={global.like}>20.5k</Text>
                    </View>
                    <Image source={require("../../assets/travel3.png")} style={global.imgstories} />
                    <Text style={global.username}> 
                        Grécia
                        <Image source={require("../../assets/check.png")} style={global.imgcheck} />
                    </Text>
                </View>
                <View>
                    <View style={global.atividades}>
                        <Text style={global.tag}>Live</Text>
                        <Text style={global.like}>20.5k</Text>
                    </View>
                    <Image source={require("../../assets/travel4.png")} style={global.imgstories} />
                    <Text style={global.username}> 
                        Chile
                        <Image source={require("../../assets/check.png")} style={global.imgcheck} />
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}