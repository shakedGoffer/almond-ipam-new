import Card from "../components/Card";

const AboutPage = () => {
  return (
    <Card className="flex flex-col h-full gap-1 text-primary-text">
      <h1 className="text-3xl font-bold mb-6">Introduction</h1>
      <p className="">
        ALMOND IP address management (IPAM) helps you effectively monitor your IP address space,
        including your Subnets & IPv4 addresses. IP address management solution by ALMOND provides a
        centralized console for efficiently tracking, reserving and allocating IP addresses.
        With ALMOND IPAM you can identify the real-time status of every Subnet & Address in the network,
        ensuring optimal resource utilization and simplify network configuration tasks.
      </p>
      <p className="mt-6">Some of the key benefits 's IP ALMOND’s address management solution includes:</p>
      <ul className="list-disc list-inside">
        <li>Centralized IP Address Management console</li>
        <li>Real-Time IP Address Status</li>
        <li>End-to-End IP Details</li>
        <li>Automated IP Address Allocation</li>
        <li>Powerful Search & Analytics</li>
        <li>Security & Authentication</li>
      </ul>
      <h2 className="text-lg mt-6">Why Choose ALMOND IPAM as your IP Address Management Tool?</h2>
      <p className="">
        ALMOND's IP address management tool helps you manage your IP efficiently by providing centralized IP
        tracking and management console.
        This IP management software allows you to have a complete overview of all the IP addresses
        in your network, reducing duplications and faults.
      </p>
      <div className="flex flex-col flex-1 justify-end">
        <a href="/test" className="text-secondary-text underline hover:text-primary-text w-fit h-fit">Learn More....</a>
      </div>
    </Card>
  );
};

export default AboutPage;