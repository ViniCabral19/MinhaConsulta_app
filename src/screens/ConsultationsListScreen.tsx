import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

interface Consultation {
    id: number;
    date: string;
    doctor: string;
    specialty: string;
    status: string;
    username: string;
}

const ConsultationsListScreen = () => {
    const [consultations, setConsultations] = useState<Consultation[]>([]);

    useEffect(() => {

        const storedUsername = localStorage.getItem("username");

        axios
            .get(`http://localhost:3000/api/consultations?username=${storedUsername}`)
            .then((response) => {
                setConsultations(response.data.consultations);
            })
            .catch((error) => {
                console.error("Erro ao buscar consultas:", error);
            });
    }, []);

    const renderItem = ({ item }: { item: Consultation }) => (
        <View style={styles.consultationItem}>
            <Text>Paciente: {item.username}</Text>
            <Text>Data: {item.date}</Text>
            <Text>Médico: {item.doctor}</Text>
            <Text>Especialidade: {item.specialty}</Text>
            <Text>Status: {item.status}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={consultations}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#fff",
    },
    consultationItem: {
        padding: 16,
        marginVertical: 8,
        backgroundColor: "#f9f9f9",
        borderRadius: 8,
    },
});

export default ConsultationsListScreen;