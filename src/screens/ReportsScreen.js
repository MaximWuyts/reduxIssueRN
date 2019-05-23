import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
import * as Progress from 'react-native-progress';
import LineChart from "react-native-responsive-linechart";

const data = [-10, -15, 40, 19, 32, 15, 52, 55, 20, 60, 78, 42, 56];
const labels = ["jun", "jul", "aug", "sep", "oct", "nov", "dec", "jan", "feb", "mar", "apr", "may",];
const config = {
    line: {
        strokeWidth: 2,
        strokeColor: "#54D9C8"
    },
    area: {
        gradientFrom: "#54D9C8",
        gradientFromOpacity: 1,
        gradientTo: "#54D9C8",
        gradientToOpacity: 0.2
    },
    yAxis: {
        labelColor: "#c8d6e5"
    },
    xAxis: {
        visible: true,
        labelFontSize: 12,
        labelColor: "#777"
    },
    grid: {
        strokeColor: "#c8d6e5",
        stepSize: 30
    },
    insetY: 10,
    insetX: 10,
    interpolation: "spline",
    backgroundColor: "#fff"
};

const data1 = [52, 55, 20, 60, 78, 42, 56, 19, 32, 15, -10, -15];
const config1 = {
    line: {
        strokeWidth: 2,
        strokeColor: "#ED8888"
    },
    area: {
        gradientFrom: "#ED8888",
        gradientFromOpacity: 1,
        gradientTo: "#ED8888",
        gradientToOpacity: 0.2
    },
    yAxis: {
        labelColor: "#c8d6e5"
    },
    xAxis: {
        visible: true,
        labelFontSize: 12,
        labelColor: "#777"
    },
    grid: {
        strokeColor: "#c8d6e5",
        stepSize: 30
    },
    insetY: 10,
    insetX: 10,
    interpolation: "spline",
    backgroundColor: "#fff"
};

const netWorth = {
    line: {
        strokeWidth: 2,
        strokeColor: "#7474BF"
    },
    area: {
        gradientFrom: "#7474BF",
        gradientFromOpacity: 1,
        gradientTo: "#7474BF",
        gradientToOpacity: 0.2
    },
    yAxis: {
        labelColor: "#c8d6e5"
    },
    xAxis: {
        visible: true,
        labelFontSize: 12,
        labelColor: "#777"
    },
    grid: {
        strokeColor: "#c8d6e5",
        stepSize: 30
    },
    insetY: 10,
    insetX: 10,
    interpolation: "spline",
    backgroundColor: "#fff"
};

export default class ReportsScreen extends Component {

    render() {
        const { headerstyle, textHeaderStyle } = styles;
        return (
            <View style={{ width: "100%", height: "100%" }}>
                <ScrollView>
                    <StatusBar
                        translucent={false}
                        animated={false}
                        hidden={false}
                        backgroundColor="#534F62"
                        barStyle="light-content" />
                    <View style={styles.headerContainer}>
                        <View style={{
                            flexDirection: "row", justifyContent: 'space-between',
                            backgroundColor: "transparent", height: 50,
                            paddingBottom: 10,
                            paddingLeft: 38.5,
                            paddingRight: 38.5,
                        }}>
                            <Text style={textHeaderStyle}>Total Net Worth</Text>
                            <Text style={textHeaderStyle}>€ 75.000</Text>
                        </View>

                        <View style={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                            <Progress.Bar
                                progress={0.7}
                                width={300}
                                color={"#FF8373"}
                                unfilledColor={"#fff"}
                                borderWidth={0}
                                height={30}
                                borderRadius={2}
                            />
                            <Text style={{ color: "#fff" }} >83%</Text>

                        </View>
                    </View>
                    <View style={styles.assetsContainer}>
                        <View style={styles.btnLogin}>
                            <Text style={styles.textStyle}>Assets</Text>
                        </View>
                        <LineChart style={{ height: 250, width: 410, }} config={config} data={data} xLabels={labels} />
                    </View>

                    <View style={styles.assetsContainer}>
                        <View style={styles.btnLogin2}>
                            <Text style={styles.textStyle}>Debts</Text>
                        </View>
                        <LineChart style={{ height: 250, width: 410, }} config={config1} data={data1} xLabels={labels} />
                    </View>

                    <View style={styles.assetsContainer}>
                        <View style={styles.btnLogin3}>
                            <Text style={styles.textStyle}>Net Worth</Text>
                        </View>
                        <LineChart style={{ height: 250, width: 410, }} config={netWorth} data={data1} xLabels={labels} />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: "#534F62",
        paddingBottom: 50,
        elevation: 20
    },
    assetsContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    headerStyle: {
        height: 50,
        paddingBottom: 10,
        paddingLeft: 38.5,
        paddingRight: 38.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "transparent",
    },
    textHeaderStyle: {
        fontSize: 20,
        color: "#fff",
        marginTop: 12.5,
        fontWeight: "700",

    },
    btnLogin: {
        width: 150,
        height: 50,
        borderRadius: 20,
        backgroundColor: '#54D9C8',
        borderWidth: 0.7,
        borderColor: "#fff",
        marginTop: 20,
    },
    btnLogin2: {
        width: 150,
        height: 50,
        borderRadius: 20,
        backgroundColor: '#ED8888',
        borderWidth: 0.7,
        borderColor: "#fff",
        marginTop: 20,
    },
    btnLogin3: {
        width: 150,
        height: 50,
        borderRadius: 20,
        backgroundColor: '#7474BF',
        borderWidth: 0.7,
        borderColor: "#fff",
        marginTop: 20,
    },
    textStyle: {
        color: '#fff',
        fontSize: 20,
        alignSelf: "center",
        textAlign: 'center',
        marginTop: 10
    },
})