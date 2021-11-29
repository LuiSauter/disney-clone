import { devices } from "../../assets/data/devices";

export default function Devices() {
  return (
    <>
      {devices.map((device, index) => (
        <article key={index}>
          <img src={device.img} alt={device.title} />
          <h3>{device.title}</h3>
          <ul>
            {device.description.map((des, index) => (
              <li key={index}>{des}</li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
}
