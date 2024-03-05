import React, { useState } from "react";
import { Box, Checkbox, Divider, Heading, Stack, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  const [approvalStates, setApprovalStates] = useState({
    discounts: false,
    pricingChanges: false,
  });

  const handleApprovalChange = (approvalType) => {
    setApprovalStates((prevStates) => ({
      ...prevStates,
      [approvalType]: !prevStates[approvalType],
    }));
  };

  return (
    <VStack spacing={6} align="stretch" m={8}>
      <Heading as="h1" size="xl">
        Director Dashboard
      </Heading>

      <Divider />

      <Box>
        <Heading as="h2" size="lg">
          Overview
        </Heading>
        <Text mt={2}>Monitor all activities and personnel.</Text>
      </Box>

      <Divider />

      <Box>
        <Heading as="h2" size="lg">
          Approvals
        </Heading>
        <Stack spacing={4} mt={2}>
          <Checkbox isChecked={approvalStates.discounts} onChange={() => handleApprovalChange("discounts")}>
            Approve Discounts
          </Checkbox>
          <Checkbox isChecked={approvalStates.pricingChanges} onChange={() => handleApprovalChange("pricingChanges")}>
            Approve Pricing Changes
          </Checkbox>
        </Stack>
      </Box>

      <Divider />

      <Box>
        <Heading as="h2" size="lg">
          Consents
        </Heading>
        <Text mt={2}>Provide consents on specific issues by checking the corresponding boxes.</Text>
        {/* Additional checkboxes for various consents can go here */}
      </Box>
    </VStack>
  );
};

export default Index;
