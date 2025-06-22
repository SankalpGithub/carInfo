export interface VehicleData {
  _id: string;
  variant_id: string;
  basicInformation: {
    brand: string;
    model: string;
    variant: string;
    vehicle_type: string;
    description: string;
    _id: string;
  };
  performance: {
    engine_type: string;
    engine_displacement: string;
    horsepower: string;
    torque: string;
    transmission: string;
    drivetrain: string;
    top_speed: string;
    acceleration: string;
    _id: string;
  };
  fuelEfficiency: {
    fuel_type: string;
    fuel_tank_capacity: string;
    mileage: string;
    range: string;
    _id: string;
  };
  dimensions: {
    length: string;
    width: string;
    height: string;
    wheelbase: string;
    ground_clearance: string;
    boot_space: string;
    kerb_weight: string;
    gross_vehicle_weight: string;
    _id: string;
  };
  chassisSuspension: {
    chassis_type: string;
    front_suspension: string;
    rear_suspension: string;
    steering_type: string;
    turning_radius: string;
    _id: string;
  };
  brakesTires: {
    front_brakes: string;
    rear_brakes: string;
    tire_size: string;
    wheel_type: string;
    spare_tire: string;
    _id: string;
  };
  exteriorFeatures: {
    headlights: string;
    fog_lamps: boolean;
    drl: boolean;
    alloy_wheels: boolean;
    sunroof: boolean;
    moonroof: boolean;
    roof_rails: boolean;
    rain_sensing_wipers: boolean;
    _id: string;
  };
  interiorFeatures: {
    seating_capacity: number;
    seat_material: string;
    adjustable_seats: string;
    infotainment_system: string;
    touchscreen_display: boolean;
    apple_carplay: boolean;
    android_auto: boolean;
    air_conditioner_type: string;
    rear_ac_vents: boolean;
    ambient_lighting: boolean;
    cruise_control: boolean;
    digital_instrument_cluster: boolean;
    _id: string;
  };
  safetyFeatures: {
    airbags: number;
    abs_with_ebd: boolean;
    traction_control: boolean;
    esp: boolean;
    rear_parking_camera: boolean;
    rear_parking_sensors: boolean;
    isofix_child_seat_mounts: boolean;
    tpms: boolean;
    hill_hold_control: boolean;
    hill_descent_control: boolean;
    lane_keep_assist: boolean;
    blind_spot_monitor: boolean;
    _id: string;
  };
  comfortConvenience: {
    keyless_entry: boolean;
    push_button_start: boolean;
    power_windows: boolean;
    power_adjustable_mirrors: boolean;
    heated_seats: boolean;
    ventilated_seats: boolean;
    wireless_charging: boolean;
    navigation_system: boolean;
    voice_command: boolean;
    _id: string;
  };
  infotainmentConnectivity: {
    speaker_system: {
      brand: string;
      count: number;
    };
    bluetooth_connectivity: boolean;
    usb_ports: number;
    wifi_hotspot: boolean;
    _id: string;
  };
  variantsColors: {
    available_colors: string[];
    variant_features: string;
    price: string;
    _id: string;
  };
}
