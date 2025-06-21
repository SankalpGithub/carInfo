import mongoose, { Schema } from "mongoose";

const basicInformationSchema = new Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    required: true,
  },
  vehicle_type: {
    type: String,
    enum: [
      "SUV",
      "Sedan",
      "Hatchback",
      "Coupe",
      "Convertible",
      "Truck",
      "Van",
      "Electric",
      "Other",
    ], // Customize as needed
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const performanceSchema = new Schema({
  engine_type: {
    type: String,
  },
  engine_displacement: {
    type: String,
  },
  horsepower: {
    type: String,
  },
  torque: {
    type: String,
  },
  transmission: {
    type: String,
  },
  drivetrain: {
    type: String,
  },
  top_speed: {
    type: String,
  },
  acceleration: {
    type: String,
  },
});

const fuelEfficiencySchema = new Schema({
  fuel_type: {
    type: String,
    enum: ["Petrol", "Diesel", "Electric", "Hybrid", "CNG"],
  },
  fuel_tank_capacity: String,
  mileage: String, // Can be in km/l or mpg
  range: String, // Useful for EVs
});

const dimensionsSchema = new Schema({
  length: String,
  width: String,
  height: String,
  wheelbase: String,
  ground_clearance: String,
  boot_space: String,
  kerb_weight: String,
  gross_vehicle_weight: String,
});

const chassisSuspensionSchema = new Schema({
  chassis_type: String,
  front_suspension: String,
  rear_suspension: String,
  steering_type: {
    type: String,
    enum: ["Power", "Electric", "Hydraulic"],
  },
  turning_radius: String,
});

const brakesTiresSchema = new Schema({
  front_brakes: {
    type: String,
    enum: ["Disc", "Drum"],
  },
  rear_brakes: {
    type: String,
    enum: ["Disc", "Drum"],
  },
  tire_size: String,
  wheel_type: {
    type: String,
    enum: ["Alloy", "Steel"],
  },
  spare_tire: {
    type: String,
    enum: ["Full-size", "Space saver"],
  },
});

const exteriorFeaturesSchema = new Schema({
  headlights: {
    type: String,
    enum: ["Halogen", "LED", "Projector"],
  },
  fog_lamps: Boolean,
  drl: Boolean, // Daytime Running Lights
  alloy_wheels: Boolean,
  sunroof: Boolean,
  moonroof: Boolean,
  roof_rails: Boolean,
  rain_sensing_wipers: Boolean,
});

const interiorFeaturesSchema = new Schema({
  seating_capacity: Number,
  seat_material: {
    type: String,
    enum: ["Fabric", "Leather"],
  },
  adjustable_seats: {
    type: String,
    enum: ["Manual", "Electric"],
  },
  infotainment_system: String, // e.g. "8-inch touchscreen, Navigation"
  touchscreen_display: Boolean,
  apple_carplay: Boolean,
  android_auto: Boolean,
  air_conditioner_type: {
    type: String,
    enum: ["Manual", "Automatic", "Dual-Zone"],
  },
  rear_ac_vents: Boolean,
  ambient_lighting: Boolean,
  cruise_control: Boolean,
  digital_instrument_cluster: Boolean,
});

const safetyFeaturesSchema = new Schema({
  airbags: Number,
  abs_with_ebd: Boolean,
  traction_control: Boolean,
  esp: Boolean, // Electronic Stability Program
  rear_parking_camera: Boolean,
  rear_parking_sensors: Boolean,
  isofix_child_seat_mounts: Boolean,
  tpms: Boolean, // Tire Pressure Monitoring System
  hill_hold_control: Boolean,
  hill_descent_control: Boolean,
  lane_keep_assist: Boolean,
  blind_spot_monitor: Boolean,
});

const comfortConvenienceSchema = new Schema({
  keyless_entry: Boolean,
  push_button_start: Boolean,
  power_windows: Boolean,
  power_adjustable_mirrors: Boolean,
  heated_seats: Boolean,
  ventilated_seats: Boolean,
  wireless_charging: Boolean,
  navigation_system: Boolean,
  voice_command: Boolean,
});

const infotainmentConnectivitySchema = new Schema({
  bluetooth_connectivity: Boolean,
  usb_ports: Number,
  wifi_hotspot: Boolean,
  speaker_system: {
    brand: String, // e.g. "Bose", "JBL"
    count: Number,
  },
});

const variantsColorsSchema = new Schema({
  available_colors: [String],
  variant_features: String, // Optional summary string
  price: String,
});

const specificationSchema = new Schema({
  variant_id: {
    type: Schema.Types.ObjectId,
    ref: "Variant",
    required: true,
    unique: true,
  },
  basicInformation: basicInformationSchema,
  performance: performanceSchema,
  fuelEfficiency: fuelEfficiencySchema,
  dimensions: dimensionsSchema,
  chassisSuspension: chassisSuspensionSchema,
  brakesTires: brakesTiresSchema,
  exteriorFeatures: exteriorFeaturesSchema,
  interiorFeatures: interiorFeaturesSchema,
  safetyFeatures: safetyFeaturesSchema,
  comfortConvenience: comfortConvenienceSchema,
  infotainmentConnectivity: infotainmentConnectivitySchema,
  variantsColors: variantsColorsSchema,
});

export const Specification = mongoose.model(
  "Specification",
  specificationSchema
);
