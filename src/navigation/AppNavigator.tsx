import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ConfirmAppointmentScreen from "../screens/ConfirmAppointmentScreen";
import ConsultationsListScreen from "../screens/ConsultationsListScreen";
import LoginScreen from "../screens/LoginScreen";
import ScheduleConsultationScreen from "../screens/ScheduleConsultationScreen";
import SignUpScreen from "../screens/SignUpScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

// Definindo o RootStackParamList com todas as telas do projeto
export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
  ConsultationsList: undefined;
  ScheduleConsultation: undefined;
  ConfirmAppointment: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ title: "Tela Inicial" }} // Título personalizável
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "Acesse sua conta" }} // Título personalizável
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ title: "Cadastrar" }} // Título personalizável
      />
      <Stack.Screen
        name="ConsultationsList"
        component={ConsultationsListScreen}
        options={{ title: "Consultas Agendadas" }} // Título personalizável
      />
      <Stack.Screen
        name="ScheduleConsultation"
        component={ScheduleConsultationScreen}
        options={{ title: "Agendar Consulta" }} // Título personalizável
      />
      <Stack.Screen
        name="ConfirmAppointment"
        component={ConfirmAppointmentScreen}
        options={{ title: "Confirmação de Agendamento" }} // Título personalizável
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;